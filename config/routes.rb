Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  resources :tickets, only: [:show, :create]
  resources :users, only: [:show, :create]
  resources :concerts, only: [:index, :create, :show, :update, :destroy]

  post '/login', to: 'sessions#create'
  get '/authorized_user', to:'users#show'
  delete '/logout', to: 'sessions#destroy'



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
