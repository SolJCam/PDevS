require 'sinatra'

require 'pycall/import'

include PyCall::Import

get '/' do 
	File.read('./views/index.html')
end

pyimport :Flask

PyCall.exec app = Flask(__name__)
PyCall.exec @app.route("/")