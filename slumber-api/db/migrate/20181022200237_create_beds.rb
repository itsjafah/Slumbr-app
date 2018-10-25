class CreateBeds < ActiveRecord::Migration[5.2]
  def change
    create_table :beds do |t|
      t.string :bed_type
      t.string :size
      t.integer :price
      t.string :image

      t.timestamps
    end
  end
end
