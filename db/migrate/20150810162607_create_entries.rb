class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.text :photo
      t.text :tag
      t.references :user, index: true, foreign_key: true
      t.references :contest, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
