<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ecoles_tuteurs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ecole_id')
                ->nullable()
                ->index()
                ->constrained()
                ->cascadeOnDelete();
            $table->foreignId('tuteur_id')
                ->nullable()
                ->index()
                ->constrained()
                ->cascadeOnDelete();
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
        Schema::dropIfExists('ecoles_tuteurs');
    }
};
