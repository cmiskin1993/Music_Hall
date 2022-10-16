class ConcertsController < ApplicationController
    before_action :is_authorized?, only: [:create, :update, :destroy, :show]
    
    def index 
        render json: Concert.all, status: :ok
    end 

    def show
        concert = Concert.find(params[:id])
        render json: concert, status: :ok
    end 

    def create
        concert = Concert.create!(concert_params)
        render json: concert, status: :created
    end 

    def update 
        concert = Concert.find(params[:id])
        concert.update!(concert_params)
        render json: concert, status: :accepted
    end 

    def destroy
        concert = Concert.find(params[:id])
        concert.destroy
        head :no_content 
    end 

    private
    
    def concert_params
        params.permit(:title, :artist, :description, :image)
    end 

end