class Medium < ActiveRecord::Base
  belongs_to :event

  mount_uploader :testurl, ImageUploader
end
