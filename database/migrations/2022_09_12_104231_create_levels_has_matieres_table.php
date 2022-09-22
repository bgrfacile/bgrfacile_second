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
        Schema::create('levels_has_matieres', function (Blueprint $table) {
            $table->id();
            $table->foreignId('level_id')
                ->index()
                ->constrained()
                ->cascadeOnDelete();
            $table->foreignId('matiere_id')
                ->index()
                ->constrained()
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('levels_has_matieres');
    }
};
