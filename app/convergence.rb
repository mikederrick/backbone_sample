require 'sinatra/base'
require 'json'

module Convergence
  class Application < Sinatra::Base

	get '/' do
	  File.read("#{settings.root}/public/views/index.html")
	end

	get '/restaurants/:id' do
		content_type :json
	  	return File.read("#{settings.root}/public/resources/tessaros.json") if params[:id] == "288717"
	  	return File.read("#{settings.root}/public/resources/south_aiken.json") if params[:id] == "2604791"
	end

	get '/restaurants' do
	  content_type :json
	  File.read("#{settings.root}/public/resources/restaurant_list.json")
	end
  end
end  
