class TicketsController < ApplicationController

    def create
        ticket = Ticket.create(ticket_params)
        render json: ticket, status: :created
    end 

    
    private

    def ticket_params
        params.permit(:concert_id, :user_id, :price)
    end 
end