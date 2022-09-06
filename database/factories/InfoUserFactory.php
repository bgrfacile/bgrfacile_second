<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InfoUser>
 */
class InfoUserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "user_id" => $this->faker->randomElement(User::all()),
            "slug" => $this->faker->slug(),
            "first_name" => $this->faker->firstName(),
            "last_name" => $this->faker->lastName(),
            "image_path" => $this->faker->imageUrl(),
            "address" => $this->faker->address(),
            "genre" => $this->faker->randomElement(["M", "F"]),
            "city" => $this->faker->city(),
            "phone" => $this->faker->phoneNumber()
        ];
    }
}
