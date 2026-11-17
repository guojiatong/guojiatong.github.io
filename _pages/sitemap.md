---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ base_path }}/sitemap.xml) available for digesting as well.

<h2>Pages</h2>
{% assign sitemap_pages = site.pages | where_exp: "entry", "entry.template_sample != true" %}
{% for post in sitemap_pages %}
  {% include archive-single.html %}
{% endfor %}

<h2>Posts</h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

{% for collection in site.collections %}
  {% unless collection.output == false or collection.label == "posts" %}
    {% assign sitemap_docs = collection.docs | where_exp: "entry", "entry.template_sample != true" %}
    {% if sitemap_docs.size > 0 or collection.docs.size == 0 %}
      <h2>{{ collection.label }}</h2>
      {% for post in sitemap_docs %}
        {% include archive-single.html %}
      {% endfor %}
    {% endif %}
  {% endunless %}
{% endfor %}
