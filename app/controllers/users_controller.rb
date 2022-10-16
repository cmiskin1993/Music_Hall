class UsersController < ApplicationController
    skip_before_action :authenticated_user, only: :create


    # this could behave as a profile page 
    def show 
        if current_user
            render json: current_user 
        else 
            render json: {error: "No Current User exists"}
        end
        # user = User.find(params[:id])
        # render json: user, status: :ok
    end 

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end
    
    private 

    def user_params
        params.permit(:username, :email, :password)
    end 
end