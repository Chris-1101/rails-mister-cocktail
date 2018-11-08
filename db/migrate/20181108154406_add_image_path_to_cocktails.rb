class AddImagePathToCocktails < ActiveRecord::Migration[5.2]
  def change
    add_column :cocktails, :image_path, :string
  end
end
