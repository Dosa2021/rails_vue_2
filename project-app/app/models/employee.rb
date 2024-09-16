class Employee < ApplicationRecord
    # permit_params :name, :department, :gender, :birth, :joined_date, :payment, :note
    validates :name, presence: true
end
