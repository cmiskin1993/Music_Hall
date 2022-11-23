class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
        t.string :title
        t.text :description
        t.string :image
        t.string :artist
        t.float :price
        t.integer :user_id




      t.timestamps
    end
  end
end