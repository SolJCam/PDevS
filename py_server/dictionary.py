from flask import Flask, request, render_template
from flask_restful import Resource, Api
from difflib import get_close_matches
import json


app = Flask(__name__)
api = Api(app)


data = json.load(open("dictionary.json"))


def get_word(word):
    if word in data:
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


def result(meaning):
    if type(meaning) == list:
        for item in meaning:
            return "- "+item
    #For words having single definition
    else:
        return "- "+meaning





#Define Route and its content
@app.route("/")
def home():
    return render_template("index.html")





class dictionary(Resource):
    def get(self, word):

        word = word.lower()

        meaning = get_word(word)

        wrd_meaning = result(meaning)

        return {word: wrd_meaning}

api.add_resource(dictionary, '/<string:word>')




if(__name__=="__main__"):
    app.run(debug=True)