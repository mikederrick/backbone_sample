require 'sinatra'
require 'json'

get '/' do
  File.read(File.join("public", "views", "index.html"))
end

get '/restaurants/:id' do
	content_type :json
  	return File.read(File.join('public', 'resources', 'tessaros.json')) if params[:id] == "288717"
  	return File.read(File.join('public', 'resources', 'south_aiken.json')) if params[:id] == "2604791"
end

get '/restaurants' do
  content_type :json
  File.read(File.join('public', 'resources', 'restaurant_list.json'))
end
  
