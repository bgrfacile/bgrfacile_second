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
        Schema::create('ecole_has_type', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ecole_id')
                ->index()
                ->constrained()
                ->cascadeOnDelete();
            $table->foreignId('type_ecole_id')
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
        Schema::dropIfExists('ecole_has_type');
    }
};
