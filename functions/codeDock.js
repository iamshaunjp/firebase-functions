var fs = require('fs');
const fetch = require("node-fetch");
function isObject(obj)
{
    return obj !== undefined && obj !== null && obj.constructor == Object;
}

async function test_func(num) {
    var res = null;
    var isJson = false;
    console.log(num);
    // Use less
    switch (num) {
        case 0:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(memberIdentity:ACoAADdekkMBNgEpjm6DLvCvnuZ_IoWY4fSCFBM)&queryId=voyagerIdentityDashProfiles.b5c27c04968c409fc0ed3546575b9b7a", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
            // Use Less
        case 1:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(userMatchHistoryCookie:AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc)&queryId=voyagerFeedDashThirdPartyIdSyncs.e9d3044f7ad311ff359561b405629210", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 2:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(vanityName:tiffany-cheung-064475201)&queryId=voyagerIdentityDashProfiles.895fdb8a5b9db42b70e4cb37c4a44507", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-pem-metadata": "Voyager - Profile=profile-top-card-supplementary",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });

        case 3:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(vanityName:tiffany-cheung-064475201)&queryId=voyagerIdentityDashProfiles.6e2d977c4346af49d9b1bc214b6b44ec", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-pem-metadata": "Voyager - Profile=profile-tab",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 4:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8)&queryId=voyagerIdentityDashProfileCards.24d92c93b2547b2e630c376b3ad29653", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-pem-metadata": "Voyager - Profile=profile-tab-initial-cards",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 5:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8)&queryId=voyagerIdentityDashProfileCards.e3b18a55a02f0b074c4d2c912493463f", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-pem-metadata": "Voyager - Profile=profile-tab-deferred-cards",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 6:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(vieweeId:ACoAADdekkMBNgEpjm6DLvCvnuZ_IoWY4fSCFBM)&queryId=voyagerLearningDashLearningRecommendations.8e663d6ad7fb5a0155d5a1cca3082e0b", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 7:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8)&queryId=voyagerIdentityDashOpenToCards.8c2dbbc3d26ee70a0ecbb632187726ff", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-pem-metadata": "Voyager - Profile Non Critical=open-to-section",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 8:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8,sectionType:relationship_explorer)&queryId=voyagerIdentityDashProfileCards.4ab878c4f9ed3d90af7caf12331717fd", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-pem-metadata": "Voyager - Profile=profile-cards-widget-recommendations",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 9:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8)&queryId=voyagerIdentityDashProfileCards.4ab878c4f9ed3d90af7caf12331717fd", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-pem-metadata": "Voyager - Profile=profile-cards-right-rail",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 10:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(memberIdentity:tiffany-cheung-064475201)&queryId=voyagerIdentityDashProfiles.7ca063cf163e5eea69e01132b41784f9", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 11:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=()&queryId=voyagerFeedDashIdentityModule.7e98357589b825e1e042d056641c4611", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 12:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(supportedEntityTypes:List(TOPIC,PROFESSIONAL_EVENT,GROUP))&queryId=voyagerFeedDashPackageRecommendations.997ca509ed7cad09d23d25a50e78821b", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 13:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(count:3,viewerPermissions:(canReadOrganizationUpdateAnalytics:true))&queryId=voyagerOrganizationDashCompanies.aff7800037a46988b56daae19ecf4915", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 14:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(start:0,count:3)&queryId=voyagerFeedDashMainFeed.b65bf8aeab9634a31764fb2a947da7e4", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 15:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(count:10)&queryId=voyagerFeedDashTopics.a8a5cd36394b12525a8d6daaa716668f", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 16:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(pageKey:messaging_realtime,slotId:onboarding)&queryId=voyagerLegoDashPageContents.33082e896a8ed4bcab9f0d5dcaa02fc6", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 17:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=(featureAccessTypes:List(CAN_ACCESS_AWAY_MESSAGES))&queryId=voyagerPremiumDashFeatureAccess.c87b20dac35795f9920f2a8072fd7af5", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 18:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(pageKey:messaging_presence,slotId:onboarding)&queryId=voyagerLegoDashPageContents.33082e896a8ed4bcab9f0d5dcaa02fc6", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 19:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=()&queryId=voyagerMessagingDashMessagingSettings.a555e413ad439d1d3f58ceef31ff0728", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 20:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=(featureAccessTypes:List(CAN_ACCESS_RECRUITER_MAILBOX,CAN_ACCESS_HIRING_MANAGER_MAILBOX))&queryId=voyagerPremiumDashFeatureAccess.c87b20dac35795f9920f2a8072fd7af5", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 21:
            res = await fetch("https://www.linkedin.com/voyager/api/voyagerMessagingGraphQL/graphql?queryId=messengerConversations.63b540cd9716b67af0c80ec1ac17573d&variables=(mailboxUrn:urn%3Ali%3Afsd_profile%3AACoAADdekkMBNgEpjm6DLvCvnuZ_IoWY4fSCFBM)", {
            "headers": {
                "accept": "application/graphql",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; UserMatchHistory=AQJOBQsLqdNmpgAAAY2xu0boB0AwOEog5Df77JCOtjioG0ZLUdP9_MR1atrjVLb-iuEolfjm6I6L_qLmqOobV8m_HL33Mh2bR_P4yofaVaK4X7nwQI6UY55wFXDehAPc0xTLgmCiL8RV-lPm9wOk14jPJ4xByCuz1NyAaodfLSn_qC7OZDnL1jKg9NahX45lmiKKd7hxmORpuzKI7IisSty5wCYLIbN5WJ8oHg6IuK4NEGalWMRjLQFlGtuTR0nibH-lQ1jtT-yL31Zupa87uNPyx5Sncox5_pUC_7whvKpie27SrIPLkNFrcYKyk_I1oWc2IX3O5NmkPswe-Pq08peCYOMDUYc; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708083858:t=1708134353:v=2:sig=AQG1UYyXz315dURxsQaaaA_pWZM1i3mm\"; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 22:
            res = await fetch("https://www.linkedin.com/voyager/api/voyagerMessagingGraphQL/graphql?queryId=messengerMailboxCounts.fc528a5a81a76dff212a4a3d2d48e84b&variables=(mailboxUrn:urn%3Ali%3Afsd_profile%3AACoAADdekkMBNgEpjm6DLvCvnuZ_IoWY4fSCFBM)", {
            "headers": {
                "accept": "application/graphql",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 23:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&queryId=voyagerMessagingDashAffiliatedMailboxes.4e470bfda7bb749503da97fff59fd3ed", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 24:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8,sectionType:pymk-recommendations-from-company)&queryId=voyagerIdentityDashProfileComponents.0aa4fe1d7819f1b21efc5be88cc3735d", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-pem-metadata": "Voyager - Profile Non Critical=view-pymk-recommendations-from-company-details",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
            // Shown Recommender Detail
        case 25:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8,sectionType:company-recommendations)&queryId=voyagerIdentityDashProfileComponents.0aa4fe1d7819f1b21efc5be88cc3735d", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-pem-metadata": "Voyager - Profile Non Critical=view-company-recommendations-details",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 26:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=(profileUrn:urn%3Ali%3Afsd_profile%3AACoAADOBGQwBrJFc6qr6vlmxLn_uszZ7fDttvY8,sectionType:browsemap-recommendations)&queryId=voyagerIdentityDashProfileComponents.0aa4fe1d7819f1b21efc5be88cc3735d", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-pem-metadata": "Voyager - Profile Non Critical=view-browsemap-recommendations-details",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; li_mc=MTsyMTsxNzA4MDgzODU0OzE7MDIxax0lSGZkCwD3zy3E9QrJUo75xqMhqlbH2Q3BfhMAQNk=; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 27:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=()&queryId=voyagerMessagingDashMessagingSettings.a555e413ad439d1d3f58ceef31ff0728", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"; li_mc=MTsyMTsxNzA4MDg0NDcyOzE7MDIxIiaXXP0ilfapL9OG1wv58+VOFW7GUV6LRMGpYgWBLlc=",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 28:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=()&queryId=voyagerMessagingDashMessagingSettings.a555e413ad439d1d3f58ceef31ff0728", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"; li_mc=MTsyMTsxNzA4MDg1MTI2OzE7MDIx+EvQNIHbIc69V/depbT9wriRXUyviy+A87KPbqGaD2E=",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 29:
            res = await fetch("https://www.linkedin.com/voyager/api/voyagerMessagingGraphQL/graphql?queryId=messengerConversations.3260fcbcd8844e03d46e2c0803851721&variables=(mailboxUrn:urn%3Ali%3Afsd_profile%3AACoAADdekkMBNgEpjm6DLvCvnuZ_IoWY4fSCFBM,syncToken:qISl6bVj0Mv5m7ZjLnVybjpsaTpmYWJyaWM6cHJvZC1sb3IxAA%3D%3D)", {
            "headers": {
                "accept": "application/graphql",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"; li_mc=MTsyMTsxNzA4MDg1MTI2OzE7MDIx+EvQNIHbIc69V/depbT9wriRXUyviy+A87KPbqGaD2E=",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 30:
            res = await fetch("https://www.linkedin.com/voyager/api/voyagerMessagingGraphQL/graphql?queryId=messengerMessages.1d658765a5bb9cba774217f1432c4012&variables=(criteria:List())", {
            "headers": {
                "accept": "application/graphql",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5",
                "csrf-token": "ajax:7050600770904385570",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"; li_mc=MTsyMTsxNzA4MDg1MTI2OzE7MDIx+EvQNIHbIc69V/depbT9wriRXUyviy+A87KPbqGaD2E=",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
        case 31:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=()&queryId=voyagerMessagingDashMessagingSettings.a555e413ad439d1d3f58ceef31ff0728", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"; li_mc=MTsyMTsxNzA4MDg1NzQ2OzE7MDIxC2KP3978GF5erggJ2buJP5LQF2lcM/4W1EcT4qsZarc=",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
            // Unknown
        case 32:
            res = await fetch("https://www.linkedin.com/voyager/api/graphql?variables=()&queryId=voyagerMessagingDashMessagingSettings.a555e413ad439d1d3f58ceef31ff0728", {
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
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;WnZ32ZLXQBiRAijre9UI3g==",
                "x-li-track": "{\"clientVersion\":\"1.13.10904\",\"mpVersion\":\"1.13.10904\",\"osName\":\"web\",\"timezoneOffset\":8,\"timezone\":\"Asia/Hong_Kong\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":2,\"displayWidth\":2880,\"displayHeight\":1800}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&56ecbe24-5ca0-4401-8b51-95a92d142135\"; li_sugr=e7d77fb0-9c08-4cdd-a673-565e54caa9ba; bscookie=\"v=1&202301140234068fec3fc7-8421-4820-85a1-2a23b2249f4bAQEHi6nwR8lYx-5CM5I6jNI-p82_ufnC\"; li_rm=AQFSW6OadFckYwAAAYYNkDGhHQEPcFGgInqnnwm1wOC7nnFUpCFj5g6ZF6yFfLK1GHdVQ88B6uCdk_MuHNUYdCdKTQcZpk_uh1c40_oBoKewhmurjKsXzBUn; JSESSIONID=\"ajax:7050600770904385570\"; li_theme=light; li_theme_set=app; aam_uuid=04023600704087825090416880646503035353; timezone=Asia/Hong_Kong; _guid=e727fec5-9e8f-4743-9edf-4f7507f81ad7; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.297436632.1706086756; liap=true; at_check=true; s_cc=true; s_fid=741E177F2CC7F2B2-12D287DA3C6CA9BA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoidmRRb0s3VXZTa1NRNmp2Sm9DYWpzZz09In0sIm5iZiI6MTcwNjY2NjM2NiwiaWF0IjoxNzA2NjY2MzY2fQ.nzxjPjeGM0xn5k-WLhlC0M7h2g4AS5aMoEAGfLTEMRs; dfpfpt=013de286ac114ecabce6b52b52dbe41d; _uetvid=f5db0cf0baa011eeac35d50fd8be6317; SID=012fec77-408f-48bb-aa77-0a9829d03ba1; VID=V_2024_02_05_05_848669; s_sq=%5B%5BB%5D%5D; gpv_pn=developer.linkedin.com%2F; s_ips=706; s_tp=3062; s_ppv=developer.linkedin.com%2F%2C23%2C23%2C706%2C1%2C4; s_tslv=1707620991215; mbox=PC#7e55e93f0dd3416eaa1cc149f5e441f8.38_0#1723172992|session#d42568c164644423a67f9129951e5323#1707622852; s_plt=7.43; s_pltp=developer.linkedin.com%2F; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; li_at=AQEDATdekkMFZYikAAABjV0-N4UAAAGNyZbBv1YAFszGy63NGYa0hDmJV1MMzlGQdiMubrCG9ObFSPu3Zc5VbryCH0ixnkhQO6qgmKBdwugkO3AASCIiL0rq7i4cDDkw7jR2UJp8Uch7QLiwlm102qKg; AnalyticsSyncHistory=AQK6wpF5T8KPbAAAAY2rvq4iII7K754DgwbKEWsn_Q6VLBRhsPa5tfOvjEsmTXh8ZWL6Eg0ughNpmUZIqW-v6A; lms_ads=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; lms_analytics=AQFXzKAWpDJAMAAAAY2rvq8EKoWdDocsjZ148dNxYnUFyWXDDMrLnJ-T7ojHNvyKOi0DJXRiu7kV7F0Dw6SSanJvbZnoGHuU; fptctx2=taBcrIH61PuCVH7eNCyH0OPzOrGnaCb%252f7mTjN%252fuIW2tiC9s5U1uau5HBS9%252bCttJuIVXcjOudaOUpKehjxVu8ANYS2DeB6UbjTnmvEQ8xAGxzyA%252frFhcysCxPl0r89W4DfMEc3Ih46huQ56bFEhNFIjwECNgZlG8%252bjXCqBqAXf4yb7RyqbEaFQJnKe2yfo7M03SfYl8x9u4JN9xnhqsLVixJd9f%252b35KHsgU4F5UBBXtz%252fnyuCodRN40bFL4mvH0LcUIC6em3w%252fPxnhJpyFURKW5uzP5zXrMNh%252fJanMVmzZYrXAdWlicOqldzyk27bQ6ZsSoHVAP1FLTZmdwGLYkNf3zXU3RVENPCRcEjdFAwzSik%253d; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19769%7CMCMID%7C03857168161155771900362013662220550674%7CMCAAMLH-1708688654%7C3%7CMCAAMB-1708688654%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1708091054s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C235995707; UserMatchHistory=AQKcjzUCnvnWZQAAAY2xvy3OoI9FDHkPtvbbDWEFmXm5D3vuXIkf235MuPsiK5BCiENRkdYJ6NNyaRE8QfW3sWOhg1WAHDtaj4Ub2wvWTVWJtUk12R9s2brVKU74dAmQ7b0ZLhRVXeEDmCB1omMKNBnzG8DaBLt0eLxAfgtVnLrtyROvdEYvpyXuZF1IEkWESSMHT9otLm69Qke2Kku8S2DkxVKQekZS7QsVifc5vQjsSZ7sKexTjr3DRpy1bLmJR-XfwW1qKZjDqLdP5cT7nybUzEhZQLQfpUij6bXJqBfGbYLFc2sXafl95kbxXlAESmDBhZKqb5DTgJcZcff6lJav3TF0SnQ; lidc=\"b=OB07:s=O:r=O:a=O:p=O:g=4253:u=280:x=1:i=1708084114:t=1708134353:v=2:sig=AQGVssZPlwUvkyB6tiY0qwaKj4fxIC60\"; li_mc=MTsyMTsxNzA4MDg2MzY2OzE7MDIxVV/lMWwQ9FzlCS1vdFJ+2zZeisAtzSo3Japb9YG6QJw=",
                "Referer": "https://www.linkedin.com/in/tiffany-cheung-064475201/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
            });
    }
    const data = await res.json();
    return data;
    
}
async function multiRun() {
    for (let index = 0; index < 33; index++) {
        // array.length
        // const element = array[index];
        await test_func(index).then((res)=>{
            // console.log(res.json());
            // var Handle = null;
            Handle = JSON.stringify(res);
            fs.appendFile("newData.json", Handle, function(err) {
                if (err) {
                    console.log(err);
                }
            });
            // if (isObject(res.json())) {
                
        
            // } else {
            //     console.log(`${index} not a json`);
            //     fs.appendFile("fault.txt", res, function(err) {
            //         if (err) {
            //             console.log(err);
            //         }
            //     });
            // }
                
            
        }).catch((reason)=>{
            console.log(`Failed at ${index}, reason ${reason}`);
        });
        
    }
}
multiRun();
// let index = 1;

// test_func().then((x)=>{
// //   console.log(x);
//   fs.writeFile("newData.json", JSON.stringify(x), function(err) {
//     if (err) {
//         console.log(err);
//     }
//   });
// });
