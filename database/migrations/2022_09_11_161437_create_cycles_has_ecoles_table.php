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
        Schema::create('cycles_has_ecoles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cycle_id')
                ->index()
                ->constrained()
                ->cascadeOnDelete();
            $table->foreignId('ecole_id')
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
        Schema::dropIfExists('cycles_has_ecoles');
    }
};
