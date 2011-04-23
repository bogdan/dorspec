require "rubygems"
require "bundler"
Bundler.setup



require "slidedown"
require "sass/plugin"



directory = File.dirname(__FILE__)
Sass::Plugin.options[:template_location] = directory
Sass::Plugin.options[:css_location] = directory


def build
  Sass::Plugin.check_for_updates
  slideshow = SlideDown.new(File.read('index.md')).render("default")
  file = File.open("index.html", "w")
  file.write(slideshow)
  file.flush
end
task :dev do
  mtime = Time.at(0)
  while true do
    new_mtime = %w(scripts.js styles.sass index.md).map do |name|
      File.mtime(name)
    end.max
    if new_mtime > mtime
      build
      mtime = new_mtime
    end
    unless @__browser
      `sensible-browser index.html`
      @__browser = true
    end
    sleep(0.1)
  end
end

task :default do
  build
  `sed s_#{directory}/__g index.html > index1.html`
  `mv index1.html index.html`
end
