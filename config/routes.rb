Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  resources :tickets, only: [:index, :create, :show]
  resources :users, only: [:show, :create, :destroy]
  resources :concerts, only: [:index, :create, :show, :update, :destroy]

  post '/login', to: 'sessions#create'
  get '/authorized_user', to:'users#show'
  delete '/logout', to: 'sessions#destroy'

  get '/description/:id', to: 'concerts#search'



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


# Create a GET custom route that includes a search term (one word, no spaces, case insensitive). This should return all the concerts that have that term in their description text field.

# 1 create the GET route
# 2 create the controller to handle the search terms
# 3 check in the localhost that it is returning info that I want 