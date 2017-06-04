class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.string :name

      t.timestamps
    end

    add_reference :articles, :category, index: true
  end

end
