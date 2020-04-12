ActiveRecord::Schema.define(version: 2020_04_12_013318) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.date "appointment_date"
    t.time "appointment_time"
    t.string "communication_medium"
    t.integer "appointment_duration"
    t.integer "rating"
    t.text "comments"
    t.integer "student_id"
    t.integer "tutor_id"
    t.integer "subject_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "subjects", force: :cascade do |t|
    t.string "category"
    t.string "title"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tutor_subjects", force: :cascade do |t|
    t.integer "tutor_id"
    t.bigint "subject_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["subject_id"], name: "index_tutor_subjects_on_subject_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.integer "phone"
    t.boolean "tutor"
    t.text "experience"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "appointments", "subjects"
  add_foreign_key "appointments", "users", column: "student_id"
  add_foreign_key "appointments", "users", column: "tutor_id"
  add_foreign_key "tutor_subjects", "subjects"
  add_foreign_key "tutor_subjects", "users", column: "tutor_id"
end
