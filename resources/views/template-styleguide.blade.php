{{--
  Template Name: Style Guide
--}}
  <!doctype html>
<html {!! get_language_attributes() !!}>
@include('partials.head')

<body @php(body_class())>
@php(wp_body_open())

<div class="container my-4">
  <h1 class="h1">Style Guide</h1>

@component('components.style-pre', [
  'title' => 'Typography'
])
<article>
  <h1>First Meeting of the OE LATAM Regional Node</h1>

  <p>The first convening of the Open Education Latin America (OE LATAM) Regional Node took place February 25 – 26 in
    San Jose, Costa Rica which included representatives from Brazil, Mexico, Chile, Costa Rica, Nicaragua, USA,
    Uruguay, Guatemala, and Colombia.</p>

  <p class="base">The first convening of the Open Education Latin America (OE LATAM) Regional Node took place February 25 – 26 in
    San Jose, Costa Rica which included representatives from Brazil, Mexico, Chile, Costa Rica, Nicaragua, USA,
    Uruguay, Guatemala, and Colombia.</p>

  <h2>UNESCO Draft Recommendation on Open Educational Resources (OER)</h2>

  <h3>UNESCO Draft Recommendation on Open Educational Resources (OER)</h3>

  <h4>UNESCO Draft Recommendation on Open Educational Resources (OER)</h4>

  <figcaption>Left to right back: Una Daly, Karen Huggins, Mario Badilla, Susan Huggins, Marcela Morales, Igor
    Lesko,
    Paul Stacey. (CC by Xu Xuefeng)
  </figcaption>

  <small>All content on oeconsortium.org is licensed under a Creative Commons Attribution 4.0 License.
    Please note that OCW course materials hosted on member sites are governed by the specific licenses chosen by the
    owners of those sites.</small>
</article>
@endcomponent

</div>

@php(wp_footer())
</body>
</html>
