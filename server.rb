require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'mustache'
require 'json'
require 'net/smtp'

get '/' do 
	File.read('./views/index.html')
end