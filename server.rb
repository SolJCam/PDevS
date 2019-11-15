require 'sinatra'

require 'pycall/import'

include PyCall::Import
pyimport :json 
pyimport :difflib

p file = ("dictionary.json")
p f = open("dictionary.json")
p data = json.load(f)
p f.close()



get '/' do 
	File.read('./views/index.html')
end


get '/:word' do

	p def retrieve_defintion(word):
		p word = word.lower()

		p if word in data:
			return data[word]  
		elif word.title() in data:
			return data[word.title()]
		elif word.upper() in data:
			return data[word.upper()]
		elif len(get_close_matches(word, data.keys())) > 0:
			action = input("Did you mean %s instead? [y or n]: " % get_close_matches(word, data.keys())[0])
			if (action == "y"):
				return data[get_close_matches(word, data.keys())[0]]
			elif (action == "n"):
				return ("The word doesn't exist, yet.")
			else:
				return ("We don't understand your entry. Apologies.")
		else:
			return ("The word doesn't exist, please double check it.")
			

	# p user_word = params[:word]

	PyCall.exec output = retrieve_defintion(params[:word])

	PyCall.eval( if type(output) == list:
		for item in output:
			return "- "+item
	#For words having single definition
	else:
		return "- "+output
	)
	

end



