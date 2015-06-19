require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'mustache'
require 'json'
require 'net/smtp'

get '/' do 
	File.read('./views/index.html')
end

# get '/' do

# message = <<MESSAGE_END
# From: Private Person <me@fromdomain.com>
# To: Sol Cameron <scameron110@gmail.com>
# Subject: SMTP e-mail test
# Date: Thur, 19 Jun 2015
# Message-Id: <some.random.id.string@gmail.com>

# This is a test email message. 
# MESSAGE_END

# smtp = Net::SMTP.start("smtp.gmail.com", 465, 'smtp.enable_starttls', 
# 					'scameron110@gmail.com', 'balotelli9', :plain)
# smtp.send_message message, 'me@fromdomain.com', 'scameron110@gmail.com'
# smtp.finish
# "Hello World!"
# end