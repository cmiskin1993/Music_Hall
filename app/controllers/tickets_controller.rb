class TicketsController < ApplicationController
    before_action :is_authorized?, only: [:create, :show]

    def index 
        tickets = Ticket.all
        render json: tickets, status: :ok 
    end 

    def create
        ticket = Ticket.create(ticket_params)
        render json: ticket, status: :created
    end
    
    
    def show
        if current_user
        ticket = Ticket.find(params[:id])
        render json: ticket, status: :ok
        else 
            render json: {error: "No Tickets"}
        end
    end  


    
    private

    def ticket_params
        params.permit(:concert_id, :user_id, :price, :ticket)
    end 
end