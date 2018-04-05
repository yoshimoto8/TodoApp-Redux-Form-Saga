class CreateTodoData < ActiveRecord::Migration[5.1]
  def change
    create_table :todo_data do |t|
      t.text :text

      t.timestamps
    end
  end
end
