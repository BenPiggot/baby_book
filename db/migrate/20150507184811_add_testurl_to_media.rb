class AddTesturlToMedia < ActiveRecord::Migration
  def change
    add_column :media, :testurl, :string
  end
end
