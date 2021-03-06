<!doctype html>
<html lang="$ContentLocale">
<head>
    <% base_tag %>
    <title><% if $MetaTitle %>$MetaTitle.XML<% else %>$Title.XML<% end_if %> | $SiteConfig.Title.XML</title>
    $MetaTags(false)
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
    <link rel="icon" href="/resources/app/client/dist/assets/favicon.ico">
    <% include HeadScripts %>
</head>
<body>
    <noscript>
        <strong>We're sorry but the site doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
        <v-app inline-template>
            <div>
                <% include Header %>
                <main>
                    $Layout
                </main>
                <% include Footer %>
            </div>
        </v-app>
    </div>
    <% include BodyScripts %>
</body>
</html>
