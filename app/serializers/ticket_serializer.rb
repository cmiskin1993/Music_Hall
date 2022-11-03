class TicketSerializer < ActiveModel::Serializer
    attributes :price, :user, :concert

    has_one :user
  
    def concert
      {title:object.concert.title, artist:object.concert.artist}
    end 
  end