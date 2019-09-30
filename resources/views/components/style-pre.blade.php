<h2 class="text-3xl mb-4">{{ $title }}</h2>

<pre class="rounded bg-main text-white p-3 pb-1 text-sm">
{!! htmlentities($slot) !!}
</pre>
<div class="mt-4">
  {{ $slot }}
</div>
