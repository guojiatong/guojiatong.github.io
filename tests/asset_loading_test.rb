require "liquid"

template = Liquid::Template.parse(File.read(File.expand_path("../_includes/footer/custom.html", __dir__)))
render = ->(content, page = {}) { template.render!({ "content" => content, "page" => page }) }

ordinary = render.call("<h2>Education</h2><p>Boston University</p>")
raise "Ordinary pages load diagram libraries" if ordinary.match?(/mathjax@|plotly\.min|mermaid@|polyfill\.min/)
raise "Sitemap link changed" unless ordinary.include?('<a href="/sitemap/">Sitemap</a>')

['\[x^2\]', '\(x^2\)', '$$x^2$$', '<script type="math/tex">x</script>'].each do |math|
  output = render.call(math)
  raise "MathJax missing for #{math}" unless output.include?("mathjax@3")
  raise "Unrelated chart library loaded" if output.match?(/plotly\.min|mermaid@/)
end

{ "plotly" => "plotly.min.js", "mermaid" => "mermaid@11" }.each do |feature, asset|
  output = render.call('<pre><code class="language-' + feature + '">example</code></pre>')
  raise "#{feature} missing" unless output.include?(asset)
  raise "Unrelated MathJax loaded" if output.include?("mathjax@3")
end

{ "mathjax" => "mathjax@3", "plotly" => "plotly.min.js", "mermaid" => "mermaid@11" }.each do |feature, asset|
  raise "Explicit #{feature} opt-in missing" unless render.call("", { feature => true }).include?(asset)
end

puts "Conditional assets: ordinary pages, math delimiters, chart blocks and explicit opt-ins passed"
