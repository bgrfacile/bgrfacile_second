<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images_ecoles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ecole_id')
                ->index()
                ->constrained()
                ->cascadeOnDelete();
            $table->string("path_image");
            $table->string("description")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images_ecoles');
    }
};
