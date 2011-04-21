require "rubygems"
require "bundler"
Bundler.setup



require "slidedown"
require "sass/plugin"



Sass::Plugin.options[:template_location] = File.dirname(__FILE__)
Sass::Plugin.options[:css_location] = File.dirname(__FILE__)

task :default do
  mtime = Time.at(0)
  while true do
    new_mtime = %w(scripts.js styles.sass slides.md).map do |name|
      File.mtime(name)
    end.max
    if new_mtime > mtime
      Sass::Plugin.check_for_updates
      slideshow = SlideDown.new(File.read('slides.md')).render("default")
      file = File.open("slides.html", "w")
      file.write(slideshow)
      file.flush
      mtime = new_mtime
    end
    unless @__browser
      `sensible-browser slides.html`
      @__browser = true
    end
    sleep(0.1)
  end
end
