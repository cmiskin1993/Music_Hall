class ProductionSerializer < ActiveModel::Serializer
    attributes :id, :title, :artist, :description, :image
  
  end