require 'sinatra'

require 'pycall/import'
include PyCall::Import

pyimport :json 
pyimport :difflib

get '/' do 
	File.read('./views/index.html')
end

data = json.load(open("dictionary.json"))

get '/:word' do
	input = params[:word]
	puts input
	def retrieve_defintion(word)
		# p data = PyCall.eval(json.load(open("dictionary.json")))
	
		word = PyCall.eval("input.lower()")
	
		if data[word]
			return data[word]  
		elsif data[word.title()]
			return data[word.title()]
		elsif data[word.upper()]
			return data[word.upper()]
		elsif len(get_close_matches(word, data.keys())) > 0
			action = input("Did you mean %s instead? [y or n]: " % get_close_matches(word, data.keys())[0])
			if (action == "y")
				return data[get_close_matches(word, data.keys())[0]]
			elsif (action == "n")
				return ("The word doesn't exist, yet.")
			else
				return ("We don't understand your entry. Apologies.")
			end
		else
			return ("The word doesn't exist, please double check it.")
		end
	end
	
	def return_word(output)
		if type(output) == list
			for item in output do
				return "- "+item
			end
		#For words having single definition
		else
			return "- "+output
		end
	end


	define = retrieve_defintion(input)
	output = return_word(define)
	puts output


end



