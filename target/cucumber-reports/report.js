$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/etsy.feature");
formatter.feature({
  "name": "Etsy Landing Page Validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate Etsy main navigation header items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.etsy.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see below menu item links",
  "rows": [
    {
      "cells": [
        "Summer Clothing \u0026 Accessories",
        "Jewelry \u0026 Accessories",
        "Clothing \u0026 Shoes",
        "Home \u0026 Living",
        "Wedding \u0026 Party",
        "Toys \u0026 Entertainment",
        "Art \u0026 Collectibles",
        "Craft Supplies",
        "Gifts \u0026 Gift Cards"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EtsySteps.user_should_see_below_menu_item_links(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});