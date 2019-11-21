import json
# This is a python library for 'Text Processing Services', as the offcial site suggests.
from difflib import SequenceMatcher, get_close_matches


#Loading the json data as python dictionary
data = json.load(open("dictionary.json"))


#Function for retrieving definition
def retrieve_defintion(word):
    #Removing the case-sensitivity from the program by converting all letters to lower since our data is in that format
    word = word.lower()

    #Check for non existing words
    #1st elif: To make sure the program returns the definition of words that start with a capital letter (e.g. Delhi, Texas)
    #2nd elif: To make sure the program returns the definition of acronyms (e.g. USA, NATO)
    #3rd elif: To find a similar word
    if word in data:
        return data[word]  
    elif word.title() in data:
        return data[word.title()]
    elif word.upper() in data:
        return data[word.upper()]
    #-- len > 0 because we can print only when the word has 1 or more close matches
    #-- In the return statement, the last [0] represents the first element from the list of close matches
    elif len(get_close_matches(word, data.keys())) > 0:
        action = input("Did you mean %s instead? [y or n]: " % get_close_matches(word, data.keys())[0])
        #-- If the answers is yes, retrive definition of suggested word
        if (action == "y"):
            return data[get_close_matches(word, data.keys())[0]]
        elif (action == "n"):
            return ("The word doesn't exist, yet.")
        else:
            return ("We don't understand your entry. Apologies.")
    else:
        return ("The word doesn't exist, please double check it.")
        

#Input from user
user_word = input("Enter a word: ")

#Retrive the definition using function and print the result
output = retrieve_defintion(user_word)

#If a word has more than one definition, print them recursively
if type(output) == list:
    for item in output:
        print("-",item)
#For words having single definition
else:
    print("-",output)




# Project url
# https://towardsdatascience.com/master-python-through-building-real-world-applications-part-1-b040b2b7faad