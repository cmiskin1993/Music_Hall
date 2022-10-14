class SessionController < ApplicationController
    def create # '/login' 
        byebug
        user = User.find_by(name:params[:name])
        
        if user&.authenticate(params[:password])
          render json: user, status: :ok
        else 
          render json: {error: "Invalid Password or Username"}, status: :unauthorized
        end
      end
end