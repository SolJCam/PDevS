require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'mustache'
require 'json'

get '/' do 
	File.read('./views/index.html')
end