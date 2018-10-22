class CreateHosts < ActiveRecord::Migration[5.2]
  def change
    create_table :hosts do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :email

      t.timestamps
    end
  end
end
