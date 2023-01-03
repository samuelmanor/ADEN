class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.belongs_to :identity, null: false, foreign_key: true
      t.belongs_to :service, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true

      t.string :name
      t.string :address
      t.string :description
      t.string :website
      t.string :phone

      t.timestamps
    end
  end
end
