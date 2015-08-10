class CreateContests < ActiveRecord::Migration
  def change
    create_table :contests do |t|
      t.string :category
      t.datetime :deadline

      t.timestamps null: false
    end
  end
end
