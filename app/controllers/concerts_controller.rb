class ConcertsController < ApplicationController
    before_action :is_authorized?, only: [:create, :update, :destroy]

    
    def index 
        render json: Concert.all, status: :ok
    end 

    def show
        concert = Concert.find(params[:id])
        render json: concert, status: :ok
    end 

    def create
        user = User.find_by(id: session[:user_id])
        concert = user.concerts.create!(concert_params)
        render json: concert, status: :created
    end 

    def update
        current_user = User.find_by(id: session[:user_id])
        concert = find_concert
        if concert.user.id = current_user.id
            concert.update(concert_params)
            render json: concert
        else
            render json: { error: "Not permitted to update"}, status: :unprocessable_entity
        end
    end

    def destroy
        current_user = User.find_by(id: session[:user_id])
        concert = find_concert
        if concert.user.id = current_user.id
          concert.destroy
        else
          render json: { error: "Not permitted to delete" }, status: :unprocessable_entity
        end
      end


    private

    def find_concert
        Concert.find_by(id: params[:id])
      end
    
    def concert_params
        params.permit(:title, :artist, :description, :image, :price, :id, :created_at, :updated_at, :concert, :term, :user_id)
    end 

end