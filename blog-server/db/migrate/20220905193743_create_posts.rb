class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :Title
      t.string :Author
      t.string :Content
      t.timestamps
    end
  end
end
