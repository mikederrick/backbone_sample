require 'rubygems'
require 'jruby'
require 'sinatra'

$LOAD_PATH.unshift File.join(File.dirname(__FILE__), '/app')

unless defined?($serlvet_context)
  Dir["./lib/\*.jar"].each { |jar| require jar }
  $CLASSPATH << Dir.new("./config").path
end

require 'convergence'

run Convergence::Application
