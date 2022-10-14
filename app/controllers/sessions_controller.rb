class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def create # '/login' 
        
        user = User.find_by(name:params[:name])
        
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
    
          render json: user, status: :ok
        else 
          render json: {errors: "Invalid Password or Username"}, status: :unauthorized
        end
      end

      def delete
        session.delete :user_id
        head :no_content
      end 
end