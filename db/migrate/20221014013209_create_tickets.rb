class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.belongs_to :concert, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.float :price

      t.timestamps
    end
  end
end