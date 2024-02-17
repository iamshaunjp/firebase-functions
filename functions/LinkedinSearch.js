var fs = require('fs');
const fetch = require("node-fetch");

async function searchPeople(search,page) {
    const start = page * 10; // TODO: Page 1 needs to ===0
    // const res = await fetch(`https://www.linkedin.com/voyager/api/graphql?variables=(start:${
    //   start
    // },query:(keywords:${encodeURI(
    //   search
    // )}),pageKey:job_search,slotId:job_search_filter_taj_upsell_)&queryId=voyagerLegoDashPageContents.33082e896a8ed4bcab9f0d5dcaa02fc6`, {
    // "headers": {
    //     "accept": "application/vnd.linkedin.normalized+json+2.1",
    //     "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
    //     "csrf-token": "ajax:7050600770904385570",
    //     "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
    //     "sec-ch-ua-mobile": "?0",
    //     "sec-ch-ua-platform": "\"macOS\"",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-origin",
    //     "x-li-lang": "en_US",
    //     "x-li-page-instance": "urn:li:page:d_flagship3_search_srp_all;IVTfC/D7SA6VMNOEtybuaA==",
    //     "x-li-track": "{\"clientVersion\":\"1.13.10539\",\"mpVersion\":\"1.13.10539\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
    //     "x-restli-protocol-version": "2.0.0",
    //     "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNpVnmYFYAuqdOwTJfFDppZqbaIpNQXpLl77zQMuo0DbI2XcIqLa1yxMKjyHoSFQ4CXEzfetEVJBDY4QIOEmlhKiu1N3FGgdozuD9HyOiQtiWA1cmbcObbD_cT; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIoQ0DI1M583F9IzRJwaUT%252f3UDRc%252b8GnqjBOmAKAeMJwGptqP7oHGQ1VbuCYhxZg7jFX44qxWcJJNweQOErSqmg%252bfR7Lohca2MZyu78rrVOnW8E3ANis56LHvX1ukuNAKAzKnGLZ5DRBzGnEzrEfulk7ayvCPeW5yodN%252b%252bLrLZ1yfHCvIwV4qiIRO5RpVex2RvqLKsKaXqhyJKkKoKa%252b3TRU%253d; AnalyticsSyncHistory=AQJap5-DpvrixAAAAY2X8yga5e4yy_hwfYfq2ltXO-ckg0eL0ne6JX5orXY8MDCuZMtoI8OAVxr6lRRgj_zQwA; lms_ads=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; lms_analytics=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; UserMatchHistory=AQIP0xnuQ7EIzwAAAY2X9Ih0a7C0mW5ayCUBAmpIal3YK7_IcOLtLYPrs3Tdx5pndk0vefvnBh-6k5iTz6D5Ho507dDRHVCmDqDz_pMWDP12sbHYkOjoXuRQwH0VOeNtPSZrqBr_udNJM-u3EyswMFTCQURzu1Sl4aMMPO3q2WpJYV_aKlh7Rr2emHTYku7NRUv2uvXvkOcYCx_Pu7oCRHKpV52s-Hvd5VR9aiP4-5mQvXEJH7mykveUoOlfeP9B6b3ha1hlvcD2qU3SDLm6QVjC7x8PsHSpK2N8O9LbjtTq5jse-5VDx2yQeKVWCVusbyGjYa-XRhu2PPntarAwVIHQNuRJ7mQ; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19765%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708256203%7C3%7CMCAAMB-1708256203%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1707658603s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4252:u=274:x=1:i=1707704685:t=1707791025:v=2:sig=AQEYwTVSe_rVhUu0qYbqtTo6C3XL6zoA\"; li_mc=MTsyMTsxNzA3NzA1MjI1OzE7MDIxsz3AXZWUkfNToKRemMNlsaJ0iIqLA42lIUAa92pWYZY=",
    //     "Referer": "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A1241&keywords=hsbc&origin=RICH_QUERY_SUGGESTION&position=0&searchId=b3072334-02f8-4c43-bae3-2d1e474f214a&sid=8W0&spellCorrectionEnabled=false",
    //     "Referrer-Policy": "strict-origin-when-cross-origin"
    //     },
    //     "body": null,
    //     "method": "GET"
    // });
    
// const res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=()&queryId=voyagerMessagingDashMessagingSettings.a555e413ad439d1d3f58ceef31ff0728", {
//   "headers": {
//     "accept": "application/vnd.linkedin.normalized+json+2.1",
//     "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
//     "csrf-token": "ajax:7050600770904385570",
//     "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-li-lang": "en_US",
//     "x-li-page-instance": "urn:li:page:d_flagship3_search_srp_all;IVTfC/D7SA6VMNOEtybuaA==",
//     "x-li-track": "{\"clientVersion\":\"1.13.10539\",\"mpVersion\":\"1.13.10539\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
//     "x-restli-protocol-version": "2.0.0",
//     "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNpVnmYFYAuqdOwTJfFDppZqbaIpNQXpLl77zQMuo0DbI2XcIqLa1yxMKjyHoSFQ4CXEzfetEVJBDY4QIOEmlhKiu1N3FGgdozuD9HyOiQtiWA1cmbcObbD_cT; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIoQ0DI1M583F9IzRJwaUT%252f3UDRc%252b8GnqjBOmAKAeMJwGptqP7oHGQ1VbuCYhxZg7jFX44qxWcJJNweQOErSqmg%252bfR7Lohca2MZyu78rrVOnW8E3ANis56LHvX1ukuNAKAzKnGLZ5DRBzGnEzrEfulk7ayvCPeW5yodN%252b%252bLrLZ1yfHCvIwV4qiIRO5RpVex2RvqLKsKaXqhyJKkKoKa%252b3TRU%253d; AnalyticsSyncHistory=AQJap5-DpvrixAAAAY2X8yga5e4yy_hwfYfq2ltXO-ckg0eL0ne6JX5orXY8MDCuZMtoI8OAVxr6lRRgj_zQwA; lms_ads=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; lms_analytics=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; li_mc=MTsyMTsxNzA3NzA1MjI1OzE7MDIxsz3AXZWUkfNToKRemMNlsaJ0iIqLA42lIUAa92pWYZY=; UserMatchHistory=AQLRrt4pFEZhcQAAAY2bMDQ1VElDVSCA3u8Rt97eBMLoZOq8Yn1BYHfwahJcJjZd5M45hhYMsWznrw81Wewmx3HcLzDpcESlInU7PU-hFITwsrYHxYndVV3fMhY4vt4mYgZrV2Y3Gvzau-OEwx8qUgaP6WcwdLwnTykt9byZRoC_DAFjG77az-PAVPkzPNvFMz7-q5SGMCzPr2e1mIBcM9fSDwO_QfRmKjtGln8bBORaWg4SJEUBsbfyWc5sAeEpXrlJUHZ5wH4rxA5NDV9OQ4xuVXNpBZN15Zb0GdfUpbI4LXxf-mHc-nJC_lCpvK09_ep0WR44FKUw4wi4bMl3tAgkQ3xPjI8; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4252:u=274:x=1:i=1707705647:t=1707791025:v=2:sig=AQFsvqTKtl7yzR0wXhcwLRfY6s0J0q9Z\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19765%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708310447%7C3%7CMCAAMB-1708310447%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1707712847s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
//     "Referer": "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A1241&keywords=hsbc&origin=RICH_QUERY_SUGGESTION&position=0&searchId=b3072334-02f8-4c43-bae3-2d1e474f214a&sid=8W0&spellCorrectionEnabled=false",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });
// People Search
//     const res = await fetch(`https://www.linkedin.com/voyager/api/graphql?variables=(start:${
//         start
//     },query:(keywords:${encodeURI(
//         search
//     )}),pageKey:job_search,slotId:job_search_filter_taj_upsell_)&queryId=voyagerLegoDashPageContents.33082e896a8ed4bcab9f0d5dcaa02fc6`, {
//   "headers": {
//     "accept": "application/vnd.linkedin.normalized+json+2.1",
//     "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
//     "csrf-token": "ajax:7050600770904385570",
//     "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-li-lang": "en_US",
//     "x-li-page-instance": "urn:li:page:d_flagship3_search_srp_people;WsNOZlQxT2iH1N0laYS2lA==",
//     "x-li-track": "{\"clientVersion\":\"1.13.10539\",\"mpVersion\":\"1.13.10539\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
//     "x-restli-protocol-version": "2.0.0",
//     "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNpVnmYFYAuqdOwTJfFDppZqbaIpNQXpLl77zQMuo0DbI2XcIqLa1yxMKjyHoSFQ4CXEzfetEVJBDY4QIOEmlhKiu1N3FGgdozuD9HyOiQtiWA1cmbcObbD_cT; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIoQ0DI1M583F9IzRJwaUT%252f3UDRc%252b8GnqjBOmAKAeMJwGptqP7oHGQ1VbuCYhxZg7jFX44qxWcJJNweQOErSqmg%252bfR7Lohca2MZyu78rrVOnW8E3ANis56LHvX1ukuNAKAzKnGLZ5DRBzGnEzrEfulk7ayvCPeW5yodN%252b%252bLrLZ1yfHCvIwV4qiIRO5RpVex2RvqLKsKaXqhyJKkKoKa%252b3TRU%253d; AnalyticsSyncHistory=AQJap5-DpvrixAAAAY2X8yga5e4yy_hwfYfq2ltXO-ckg0eL0ne6JX5orXY8MDCuZMtoI8OAVxr6lRRgj_zQwA; lms_ads=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; lms_analytics=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; UserMatchHistory=AQLRrt4pFEZhcQAAAY2bMDQ1VElDVSCA3u8Rt97eBMLoZOq8Yn1BYHfwahJcJjZd5M45hhYMsWznrw81Wewmx3HcLzDpcESlInU7PU-hFITwsrYHxYndVV3fMhY4vt4mYgZrV2Y3Gvzau-OEwx8qUgaP6WcwdLwnTykt9byZRoC_DAFjG77az-PAVPkzPNvFMz7-q5SGMCzPr2e1mIBcM9fSDwO_QfRmKjtGln8bBORaWg4SJEUBsbfyWc5sAeEpXrlJUHZ5wH4rxA5NDV9OQ4xuVXNpBZN15Zb0GdfUpbI4LXxf-mHc-nJC_lCpvK09_ep0WR44FKUw4wi4bMl3tAgkQ3xPjI8; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4252:u=274:x=1:i=1707705647:t=1707791025:v=2:sig=AQFsvqTKtl7yzR0wXhcwLRfY6s0J0q9Z\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19765%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708310447%7C3%7CMCAAMB-1708310447%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1707712847s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; li_mc=MTsyMTsxNzA3NzA1ODM2OzE7MDIxF/7dImIp5IpbmIbWbIBF+bzdNdSZk/hRb6pPPYQCaTY=",
//     "Referer": "https://www.linkedin.com/search/results/people/?heroEntityKey=urn%3Ali%3Aorganization%3A1241&keywords=hsbc&origin=SWITCH_SEARCH_VERTICAL&position=0&searchId=b3072334-02f8-4c43-bae3-2d1e474f214a&sid=8W0",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });
const res = await fetch(`https://www.linkedin.com/voyager/api/graphql?variables=(start:10,origin:SWITCH_SEARCH_VERTICAL,query:(keywords:${search},flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:resultType,value:List(PEOPLE))),includeFiltersInResponse:false))&queryId=voyagerSearchDashClusters.ecc0d60fe98848da4adc6b796a441f55`, {
  "headers": {
    "accept": "application/vnd.linkedin.normalized+json+2.1",
    "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
    "csrf-token": "ajax:7050600770904385570",
    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-li-lang": "en_US",
    "x-li-page-instance": "urn:li:page:d_flagship3_search_srp_people_load_more;Bcc0VBdKQ8+vPCCk1NKqNA==",
    "x-li-pem-metadata": "Voyager - People SRP=search-results",
    "x-li-track": "{\"clientVersion\":\"1.13.10680\",\"mpVersion\":\"1.13.10680\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
    "x-restli-protocol-version": "2.0.0",
    "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNpVnmYFYAuqdOwTJfFDppZqbaIpNQXpLl77zQMuo0DbI2XcIqLa1yxMKjyHoSFQ4CXEzfetEVJBDY4QIOEmlhKiu1N3FGgdozuD9HyOiQtiWA1cmbcObbD_cT; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; AnalyticsSyncHistory=AQJap5-DpvrixAAAAY2X8yga5e4yy_hwfYfq2ltXO-ckg0eL0ne6JX5orXY8MDCuZMtoI8OAVxr6lRRgj_zQwA; lms_ads=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; lms_analytics=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIkLlR5JXCJe7x2T0vQyW0%252fpswXfH3ghhJGKEql2wGGtQmaLAqEjn%252bLMxDWEc4aWqudejp7lHFf3m2Sy0A0Vgu8xcJcRZ%252b2d8nRwgadQWZKnO86ob9kfY6dliu0arCm3uuJitlfD%252fKIaYohhQtoDBDGB31PFvvkxWtZc1q5uwn05G8bJ9oW0vFdH5iq3TOtT%252bvJTXxBcSjAyACyLOTliKpqQ%253d; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; __cf_bm=lw0zklmLmKeM9P6UCI5oj2Zrqikr.rlsMquQchexGCg-1707810705-1-Adha+4VWfHn2Hd84F96MoUcEpS9/wh1szeJxkad48ntyVn5iZXVLlWM0DBRVcpzL8kwg/D/6CLfDRaQCkq3rsUs=; li_mc=MTsyMTsxNzA3ODExNzAwOzE7MDIxfP8Li18osWHSlmdJLQKbmtFYczLH5w8a1TtRvnuzfv8=; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19767%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708416626%7C3%7CMCAAMB-1708416626%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1707819026s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQL5PkdU-cr-mwAAAY2hhRt5kIcFzzLdjWBecn5a4BDvEWlMNta-j5lZ1jW4sNiagWO39lD1FpcH89NQ5NDwG-elBb2-pz10G12VlN201zt7KJIlJL-gk0xF77Zel_shb-UvOvLmy-ggwNjwMLiTrkeVeFeUQhBd67mlW2cSF-5Lhls4UOH5rUYZtms-K952g4yjEJd8VYw0K_uK0LF93kR9WAi3D7-Xbh12vr3eUdpRNF9erjz65lG8ygyppUWDJakax3O-bOMTZlt0ABqfZNY2R2eepAtYQhqSNcLgatqjUzLRh-c7d5QHl1jdruWuilvab75RZg_VsPQHpFAx_SbItl8pDwk; lidc=\"b=VB07:s=V:r=V:a=V:p=V:g=4831:u=275:x=1:i=1707811874:t=1707813560:v=2:sig=AQHQOYkim8GhDQEPBfmCFn92Vfi47Jvt\"",
    "Referer": `https://www.linkedin.com/search/results/people/?keywords=${search}&origin=SWITCH_SEARCH_VERTICAL&sid=u%3A*`,
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

// const res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=()&queryId=voyagerMessagingDashMessagingSettings.a555e413ad439d1d3f58ceef31ff0728", {
//   "headers": {
//     "accept": "application/vnd.linkedin.normalized+json+2.1",
//     "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
//     "csrf-token": "ajax:7050600770904385570",
//     "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-li-lang": "en_US",
//     "x-li-page-instance": "urn:li:page:d_flagship3_search_srp_people;WsNOZlQxT2iH1N0laYS2lA==",
//     "x-li-track": "{\"clientVersion\":\"1.13.10539\",\"mpVersion\":\"1.13.10539\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
//     "x-restli-protocol-version": "2.0.0",
//     "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNpVnmYFYAuqdOwTJfFDppZqbaIpNQXpLl77zQMuo0DbI2XcIqLa1yxMKjyHoSFQ4CXEzfetEVJBDY4QIOEmlhKiu1N3FGgdozuD9HyOiQtiWA1cmbcObbD_cT; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIoQ0DI1M583F9IzRJwaUT%252f3UDRc%252b8GnqjBOmAKAeMJwGptqP7oHGQ1VbuCYhxZg7jFX44qxWcJJNweQOErSqmg%252bfR7Lohca2MZyu78rrVOnW8E3ANis56LHvX1ukuNAKAzKnGLZ5DRBzGnEzrEfulk7ayvCPeW5yodN%252b%252bLrLZ1yfHCvIwV4qiIRO5RpVex2RvqLKsKaXqhyJKkKoKa%252b3TRU%253d; AnalyticsSyncHistory=AQJap5-DpvrixAAAAY2X8yga5e4yy_hwfYfq2ltXO-ckg0eL0ne6JX5orXY8MDCuZMtoI8OAVxr6lRRgj_zQwA; lms_ads=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; lms_analytics=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; UserMatchHistory=AQLRrt4pFEZhcQAAAY2bMDQ1VElDVSCA3u8Rt97eBMLoZOq8Yn1BYHfwahJcJjZd5M45hhYMsWznrw81Wewmx3HcLzDpcESlInU7PU-hFITwsrYHxYndVV3fMhY4vt4mYgZrV2Y3Gvzau-OEwx8qUgaP6WcwdLwnTykt9byZRoC_DAFjG77az-PAVPkzPNvFMz7-q5SGMCzPr2e1mIBcM9fSDwO_QfRmKjtGln8bBORaWg4SJEUBsbfyWc5sAeEpXrlJUHZ5wH4rxA5NDV9OQ4xuVXNpBZN15Zb0GdfUpbI4LXxf-mHc-nJC_lCpvK09_ep0WR44FKUw4wi4bMl3tAgkQ3xPjI8; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4252:u=274:x=1:i=1707705647:t=1707791025:v=2:sig=AQFsvqTKtl7yzR0wXhcwLRfY6s0J0q9Z\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19765%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708310447%7C3%7CMCAAMB-1708310447%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1707712847s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; li_mc=MTsyMTsxNzA3NzA1ODM2OzE7MDIxF/7dImIp5IpbmIbWbIBF+bzdNdSZk/hRb6pPPYQCaTY=",
//     "Referer": "https://www.linkedin.com/search/results/people/?heroEntityKey=urn%3Ali%3Aorganization%3A1241&keywords=hsbc&origin=SWITCH_SEARCH_VERTICAL&position=0&searchId=b3072334-02f8-4c43-bae3-2d1e474f214a&sid=8W0",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });
// // With People-HKUST filter
// const res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=(lazyLoadedActionsUrns:List(urn%3Ali%3Afsd_lazyLoadedActions%3A%28urn%3Ali%3Afsd_profileActions%3A%28ACoAACQo7UMBYI3DT-KASAdnSuhaz94lamasMdU%2CSEARCH_STATEFUL_COMPLIMENTARY%2CEMPTY_CONTEXT_ENTITY_URN%29%2CPEOPLE%2CSEARCH_SRP%29,urn%3Ali%3Afsd_lazyLoadedActions%3A%28urn%3Ali%3Afsd_profileActions%3A%28ACoAACZbG_gBS4LLzhagvraZ3xCar1CMy7H1jD4%2CSEARCH_STATEFUL_COMPLIMENTARY%2CEMPTY_CONTEXT_ENTITY_URN%29%2CPEOPLE%2CSEARCH_SRP%29,urn%3Ali%3Afsd_lazyLoadedActions%3A%28urn%3Ali%3Afsd_profileActions%3A%28ACoAAChbe0gBNmM6XCtqngfBmq6GuWE5gwNbFNU%2CSEARCH_STATEFUL_COMPLIMENTARY%2CEMPTY_CONTEXT_ENTITY_URN%29%2CPEOPLE%2CSEARCH_SRP%29,urn%3Ali%3Afsd_lazyLoadedActions%3A%28urn%3Ali%3Afsd_profileActions%3A%28ACoAACw3CKEBz1Zd7sBLZw5DQDPKlXLPd06uLHk%2CSEARCH_STATEFUL_COMPLIMENTARY%2CEMPTY_CONTEXT_ENTITY_URN%29%2CPEOPLE%2CSEARCH_SRP%29,urn%3Ali%3Afsd_lazyLoadedActions%3A%28urn%3Ali%3Afsd_profileActions%3A%28ACoAACzORN8BCNGZCZAbOrWAcOReZNVCIQ62Xe8%2CSEARCH_STATEFUL_COMPLIMENTARY%2CEMPTY_CONTEXT_ENTITY_URN%29%2CPEOPLE%2CSEARCH_SRP%29,urn%3Ali%3Afsd_lazyLoadedActions%3A%28urn%3Ali%3Afsd_profileActions%3A%28ACoAAD5FoHsBZ1zJhCasTM6MElZwwCndnWGpOQA%2CSEARCH_STATEFUL_COMPLIMENTARY%2CEMPTY_CONTEXT_ENTITY_URN%29%2CPEOPLE%2CSEARCH_SRP%29,urn%3Ali%3Afsd_lazyLoadedActions%3A%28urn%3Ali%3Afsd_profileActions%3A%28ACoAADIVyW0ByKJjeMl777D0__NfDIOvuodOyII%2CSEARCH_STATEFUL_COMPLIMENTARY%2CEMPTY_CONTEXT_ENTITY_URN%29%2CPEOPLE%2CSEARCH_SRP%29,urn%3Ali%3Afsd_lazyLoadedActions%3A%28urn%3Ali%3Afsd_profileActions%3A%28ACoAADIsgJwB3vtyfJsFx5TZOVK9m28M-jfRMjI%2CSEARCH_STATEFUL_COMPLIMENTARY%2CEMPTY_CONTEXT_ENTITY_URN%29%2CPEOPLE%2CSEARCH_SRP%29,urn%3Ali%3Afsd_lazyLoadedActions%3A%28urn%3Ali%3Afsd_profileActions%3A%28ACoAADMhxR0BW8Tn_kZfazTZB9_3nScR4G8jT1E%2CSEARCH_STATEFUL_COMPLIMENTARY%2CEMPTY_CONTEXT_ENTITY_URN%29%2CPEOPLE%2CSEARCH_SRP%29,urn%3Ali%3Afsd_lazyLoadedActions%3A%28urn%3Ali%3Afsd_profileActions%3A%28ACoAADZknLoBmNoPjr3Gw1BqteV7ywpVa_qrohE%2CSEARCH_STATEFUL_COMPLIMENTARY%2CEMPTY_CONTEXT_ENTITY_URN%29%2CPEOPLE%2CSEARCH_SRP%29))&queryId=voyagerSearchDashLazyLoadedActions.c458e0770d862b4521c591e4438c632d", {
//   "headers": {
//     "accept": "application/vnd.linkedin.normalized+json+2.1",
//     "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
//     "csrf-token": "ajax:7050600770904385570",
//     "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-li-lang": "en_US",
//     "x-li-page-instance": "urn:li:page:d_flagship3_search_srp_people;aipbtgG3SU2fJBPXX+MyEw==",
//     "x-li-pem-metadata": "Voyager - People SRP=lazy-loaded-actions",
//     "x-li-track": "{\"clientVersion\":\"1.13.10539\",\"mpVersion\":\"1.13.10539\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
//     "x-restli-protocol-version": "2.0.0",
//     "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNpVnmYFYAuqdOwTJfFDppZqbaIpNQXpLl77zQMuo0DbI2XcIqLa1yxMKjyHoSFQ4CXEzfetEVJBDY4QIOEmlhKiu1N3FGgdozuD9HyOiQtiWA1cmbcObbD_cT; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIoQ0DI1M583F9IzRJwaUT%252f3UDRc%252b8GnqjBOmAKAeMJwGptqP7oHGQ1VbuCYhxZg7jFX44qxWcJJNweQOErSqmg%252bfR7Lohca2MZyu78rrVOnW8E3ANis56LHvX1ukuNAKAzKnGLZ5DRBzGnEzrEfulk7ayvCPeW5yodN%252b%252bLrLZ1yfHCvIwV4qiIRO5RpVex2RvqLKsKaXqhyJKkKoKa%252b3TRU%253d; AnalyticsSyncHistory=AQJap5-DpvrixAAAAY2X8yga5e4yy_hwfYfq2ltXO-ckg0eL0ne6JX5orXY8MDCuZMtoI8OAVxr6lRRgj_zQwA; lms_ads=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; lms_analytics=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; UserMatchHistory=AQLRrt4pFEZhcQAAAY2bMDQ1VElDVSCA3u8Rt97eBMLoZOq8Yn1BYHfwahJcJjZd5M45hhYMsWznrw81Wewmx3HcLzDpcESlInU7PU-hFITwsrYHxYndVV3fMhY4vt4mYgZrV2Y3Gvzau-OEwx8qUgaP6WcwdLwnTykt9byZRoC_DAFjG77az-PAVPkzPNvFMz7-q5SGMCzPr2e1mIBcM9fSDwO_QfRmKjtGln8bBORaWg4SJEUBsbfyWc5sAeEpXrlJUHZ5wH4rxA5NDV9OQ4xuVXNpBZN15Zb0GdfUpbI4LXxf-mHc-nJC_lCpvK09_ep0WR44FKUw4wi4bMl3tAgkQ3xPjI8; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4252:u=274:x=1:i=1707705647:t=1707791025:v=2:sig=AQFsvqTKtl7yzR0wXhcwLRfY6s0J0q9Z\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19765%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708310447%7C3%7CMCAAMB-1708310447%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1707712847s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; li_mc=MTsyMTsxNzA3NzA1ODM2OzE7MDIxF/7dImIp5IpbmIbWbIBF+bzdNdSZk/hRb6pPPYQCaTY=",
//     "Referer": "https://www.linkedin.com/search/results/people/?heroEntityKey=urn%3Ali%3Aorganization%3A1241&keywords=hsbc&origin=FACETED_SEARCH&position=0&schoolFilter=%5B%2211966%22%5D&searchId=b3072334-02f8-4c43-bae3-2d1e474f214a&sid=WEd",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });
    // return res;
    return res.json();
}
async function grabProfile(params) {
  const res = await fetch(`https://www.linkedin.com/voyager/api/graphql?variables=(vanityName:${params})&queryId=voyagerIdentityDashProfiles.e9a2777bb100f85817cfc3e6fd391847`, {
  "headers": {
    "accept": "application/vnd.linkedin.normalized+json+2.1",
    "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
    "csrf-token": "ajax:7050600770904385570",
    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-li-lang": "en_US",
    "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;KngPNzrMQGCUdWCRwqT1sA==",
    "x-li-pem-metadata": "Voyager - Profile=profile-top-card-core",
    "x-li-track": "{\"clientVersion\":\"1.13.10757\",\"mpVersion\":\"1.13.10757\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
    "x-restli-protocol-version": "2.0.0",
    "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\";li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; AnalyticsSyncHistory=AQJap5-DpvrixAAAAY2X8yga5e4yy_hwfYfq2ltXO-ckg0eL0ne6JX5orXY8MDCuZMtoI8OAVxr6lRRgj_zQwA; lms_ads=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; lms_analytics=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; __cf_bm=pAqCA35xuP7A2Uudj41Lio2ixAt642XfkEcTnKLDZZE-1707889780-1-AWOwijfYrTSsmUgfuWL0FgjEyZNC2dVbc4/7ZX3UlNZFWzNxvz1bwaelD50hRMP/QqvIfoWjuTG1qcK2b6yMx6Q=; li_mc=MTsyMTsxNzA3ODg5ODU0OzE7MDIxanqqgJKb5gr0t1jVb8x9JfSB32CWX6jEy94zqMapabs=; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19767%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708494775%7C3%7CMCAAMB-1708494775%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1707897175s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFInZ7KrqX3n%252bI7sgGRXai4fYwcmDK396ojyJv3rj4t0cq%252bNhFGL35KEnprrO69oRd14JAOdJv%252bUiZ2ZymXs%252fpw0K3QookWwJCgOJ237YSpgiEVmVYlbL0x2V84TwJgFc%252b6W6kb%252f3wU2qSntm3QK%252ff%252fWpj3wdlkuI1Nzvh29JXKyBrHvErvnXYFSDCmIvuBejph8IKE%252fe8yYXH3dUByiaPx0g%253d; UserMatchHistory=AQLwDg7uQYaYgAAAAY2mLSFr1NQmiM4_2OTeJSCqpGUATxSE5f0syYn3_U-dOdDXDIcqbraKM0uujqYIKm3CKVJsRB9uovB_8nfbmWJy9RzpWBjfqPmlTiaRCmtDJeQGq-cisqalDBwWw2vGUxfE0oIknzJrHMuPDesr0XHEvT_AmyaN4vQF1WOidgpAtiaz9vTM1dWdRh6fF_0smJ0NDQsu6tAlZNRGXD0nHbEUlHt7Z_RDFie2JdCMtWw5bWCfyQfvl2thQ7hZQDcuh75YhgEtVAImphnFxH9r8aCMj6fU7CsavVKBPv5TIcYyke2L63pwADLdBm-qq768lw2bIczcFwZrr74; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4252:u=276:x=1:i=1707889993:t=1707965716:v=2:sig=AQFnDrVYQ15ofhxWWwj_ctZaaa_KNvT-\"",
    "Referer": "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8&keywords=tiffany%20cheung&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=172e6468-4eed-4277-ab99-6bbe4929e9b4&sid=a-t&spellCorrectionEnabled=true",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});
  return res.json();
}






// fetch("https://www.linkedin.com/voyager/api/graphql?variables=(start:0,origin:FACETED_SEARCH,query:(keywords:HSBC,flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:resultType,value:List(PEOPLE)),(key:schoolFilter,value:List(11966))),includeFiltersInResponse:false))&queryId=voyagerSearchDashClusters.ecc0d60fe98848da4adc6b796a441f55", {
//   "headers": {
//     "accept": "application/vnd.linkedin.normalized+json+2.1",
//     "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
//     "csrf-token": "ajax:7050600770904385570",
//     "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-li-lang": "en_US",
//     "x-li-page-instance": "urn:li:page:d_flagship3_search_srp_people;Ii42ZgpFT5GYFVch0P+ZRw==",
//     "x-li-pem-metadata": "Voyager - People SRP=search-results",
//     "x-li-track": "{\"clientVersion\":\"1.13.10680\",\"mpVersion\":\"1.13.10680\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
//     "x-restli-protocol-version": "2.0.0",
//     "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNpVnmYFYAuqdOwTJfFDppZqbaIpNQXpLl77zQMuo0DbI2XcIqLa1yxMKjyHoSFQ4CXEzfetEVJBDY4QIOEmlhKiu1N3FGgdozuD9HyOiQtiWA1cmbcObbD_cT; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; AnalyticsSyncHistory=AQJap5-DpvrixAAAAY2X8yga5e4yy_hwfYfq2ltXO-ckg0eL0ne6JX5orXY8MDCuZMtoI8OAVxr6lRRgj_zQwA; lms_ads=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; lms_analytics=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIkLlR5JXCJe7x2T0vQyW0%252fpswXfH3ghhJGKEql2wGGtQmaLAqEjn%252bLMxDWEc4aWqudejp7lHFf3m2Sy0A0Vgu8xcJcRZ%252b2d8nRwgadQWZKnO86ob9kfY6dliu0arCm3uuJitlfD%252fKIaYohhQtoDBDGB31PFvvkxWtZc1q5uwn05G8bJ9oW0vFdH5iq3TOtT%252bvJTXxBcSjAyACyLOTliKpqQ%253d; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; __cf_bm=lw0zklmLmKeM9P6UCI5oj2Zrqikr.rlsMquQchexGCg-1707810705-1-Adha+4VWfHn2Hd84F96MoUcEpS9/wh1szeJxkad48ntyVn5iZXVLlWM0DBRVcpzL8kwg/D/6CLfDRaQCkq3rsUs=; li_mc=MTsyMTsxNzA3ODExNzAwOzE7MDIxfP8Li18osWHSlmdJLQKbmtFYczLH5w8a1TtRvnuzfv8=; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19767%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708416626%7C3%7CMCAAMB-1708416626%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1707819026s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQL5PkdU-cr-mwAAAY2hhRt5kIcFzzLdjWBecn5a4BDvEWlMNta-j5lZ1jW4sNiagWO39lD1FpcH89NQ5NDwG-elBb2-pz10G12VlN201zt7KJIlJL-gk0xF77Zel_shb-UvOvLmy-ggwNjwMLiTrkeVeFeUQhBd67mlW2cSF-5Lhls4UOH5rUYZtms-K952g4yjEJd8VYw0K_uK0LF93kR9WAi3D7-Xbh12vr3eUdpRNF9erjz65lG8ygyppUWDJakax3O-bOMTZlt0ABqfZNY2R2eepAtYQhqSNcLgatqjUzLRh-c7d5QHl1jdruWuilvab75RZg_VsPQHpFAx_SbItl8pDwk; lidc=\"b=VB07:s=V:r=V:a=V:p=V:g=4831:u=275:x=1:i=1707811874:t=1707813560:v=2:sig=AQHQOYkim8GhDQEPBfmCFn92Vfi47Jvt\"",
//     "Referer": "https://www.linkedin.com/search/results/people/?keywords=HSBC&origin=SWITCH_SEARCH_VERTICAL&page=2&sid=.De",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });
function getHandle(linkedinProfileUrl) {
  const url = getLinkedinProfileUrl(linkedinProfileUrl);
  return url?.split("/in/")?.[1];
}

function getLinkedinProfileUrl(navigationUrl) {
  return navigationUrl?.split("?")?.[0];
}
/**
 * 
 * @param {String} query 
 * @param {Number} page 
 * @returns 
 */
async function searchLinkedIn(query,page) {
  try {
    const search = await searchPeople(query,page);
    const peoplesProfiles = search?.included?.filter(
      (s) => s?.template === "UNIVERSAL"
    );
    const jsonify = peoplesProfiles.map((p) => {
      return {
        name: p?.title?.text,
        handle: getHandle(p?.navigationUrl),
        jobTitle: p?.primarySubtitle?.text,
        summary: p?.summary?.text,
        location: p?.secondarySubtitle?.text,
        image:
          p?.image?.attributes?.[0]?.detailData?.nonEntityProfilePicture
            ?.vectorImage?.artifacts?.[0]?.fileIdentifyingUrlPathSegment,
        url: getLinkedinProfileUrl(p?.navigationUrl),
      };
    });
    return jsonify;
  } catch (error) {
    console.log("error at search: ", error.message);
  }
}

// searchPeople('software engineer',1).then((res)=>{
//   // console.log(res);
//   // console.log(res['included']);
//   console.log(res['data']);
//   // console.log(res['data']['data']); 
//   // console.log(res['data']['data']['legoDashPageContentsByPageKeyAndSlotId']['elements'][0]['slots']);// 
//   fs.writeFile("newData.json", JSON.stringify(res), function(err) {
//     if (err) {
//         console.log(err);
//     }
//   });  
// });

// raynechao tiffany-cheung-064475201 clara-chan-005a95260
grabProfile('janae-t-189304179').then((res)=>{
  console.log(res);
  // console.log(res['included']);
  // fs.writeFile("newData.json", JSON.stringify(res), function(err) {
  //   if (err) {
  //       console.log(err);
  //   }
  // });

});


// searchLinkedIn('HSBC').then((x)=>{
//   console.log(x);
//   // fs.writeFile("newData.json", JSON.stringify(x), function(err) {
//   //   if (err) {
//   //       console.log(err);
//   //   }
//   // });
// });


searchLinkedIn('HSBC').then((profileFetched)=>{
  profileFetched.array.forEach(element => {
    var userID = element['handle'];
    grabProfile(userID).then((res)=>{
      console.log(res);
      // console.log(res['included']);
      // fs.writeFile("newData.json", JSON.stringify(res), function(err) {
      //   if (err) {
      //       console.log(err);
      //   }
      // });
    
    });
  });
  console.log(x);
  // fs.writeFile("newData.json", JSON.stringify(x), function(err) {
  //   if (err) {
  //       console.log(err);
  //   }
  // });
});

/**
 * 
 * 
 * // Grab Profile
fetch("https://www.linkedin.com/voyager/api/graphql?variables=(vanityName:tiffany-cheung-064475201)&queryId=voyagerIdentityDashProfiles.e9a2777bb100f85817cfc3e6fd391847", {
  "headers": {
    "accept": "application/vnd.linkedin.normalized+json+2.1",
    "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
    "csrf-token": "ajax:7050600770904385570",
    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-li-lang": "en_US",
    "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;KngPNzrMQGCUdWCRwqT1sA==",
    "x-li-pem-metadata": "Voyager - Profile=profile-top-card-core",
    "x-li-track": "{\"clientVersion\":\"1.13.10757\",\"mpVersion\":\"1.13.10757\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
    "x-restli-protocol-version": "2.0.0",
    "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; AnalyticsSyncHistory=AQJap5-DpvrixAAAAY2X8yga5e4yy_hwfYfq2ltXO-ckg0eL0ne6JX5orXY8MDCuZMtoI8OAVxr6lRRgj_zQwA; lms_ads=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; lms_analytics=AQEbZu2kbEAxHwAAAY2X8ykR0nRnoLk80al8zKXfJ2nQNAYk2wkFe2aTcKj0fQy4Yj_-bZV_JHrukV_HxewhxJfd6IySq1dq; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; __cf_bm=pAqCA35xuP7A2Uudj41Lio2ixAt642XfkEcTnKLDZZE-1707889780-1-AWOwijfYrTSsmUgfuWL0FgjEyZNC2dVbc4/7ZX3UlNZFWzNxvz1bwaelD50hRMP/QqvIfoWjuTG1qcK2b6yMx6Q=; li_mc=MTsyMTsxNzA3ODg5ODU0OzE7MDIxanqqgJKb5gr0t1jVb8x9JfSB32CWX6jEy94zqMapabs=; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19767%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708494775%7C3%7CMCAAMB-1708494775%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1707897175s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFInZ7KrqX3n%252bI7sgGRXai4fYwcmDK396ojyJv3rj4t0cq%252bNhFGL35KEnprrO69oRd14JAOdJv%252bUiZ2ZymXs%252fpw0K3QookWwJCgOJ237YSpgiEVmVYlbL0x2V84TwJgFc%252b6W6kb%252f3wU2qSntm3QK%252ff%252fWpj3wdlkuI1Nzvh29JXKyBrHvErvnXYFSDCmIvuBejph8IKE%252fe8yYXH3dUByiaPx0g%253d; UserMatchHistory=AQLwDg7uQYaYgAAAAY2mLSFr1NQmiM4_2OTeJSCqpGUATxSE5f0syYn3_U-dOdDXDIcqbraKM0uujqYIKm3CKVJsRB9uovB_8nfbmWJy9RzpWBjfqPmlTiaRCmtDJeQGq-cisqalDBwWw2vGUxfE0oIknzJrHMuPDesr0XHEvT_AmyaN4vQF1WOidgpAtiaz9vTM1dWdRh6fF_0smJ0NDQsu6tAlZNRGXD0nHbEUlHt7Z_RDFie2JdCMtWw5bWCfyQfvl2thQ7hZQDcuh75YhgEtVAImphnFxH9r8aCMj6fU7CsavVKBPv5TIcYyke2L63pwADLdBm-qq768lw2bIczcFwZrr74; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4252:u=276:x=1:i=1707889993:t=1707965716:v=2:sig=AQFnDrVYQ15ofhxWWwj_ctZaaa_KNvT-\"",
    "Referer": "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8&keywords=tiffany%20cheung&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=172e6468-4eed-4277-ab99-6bbe4929e9b4&sid=a-t&spellCorrectionEnabled=true",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});
 * 

 */