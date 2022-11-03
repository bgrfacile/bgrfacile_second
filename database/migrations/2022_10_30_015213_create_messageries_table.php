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
        Schema::create('messageries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('from_id')
                ->nullable()
                ->index()
                ->constrained('users')
                ->cascadeOnDelete();
            $table->foreignId('to_id')
                ->nullable()
                ->index()
                ->constrained('users')
                ->cascadeOnDelete();
            $table->text('content');
            $table->timestamps();
            $table->dateTime('read_at')->nullable();

            // $table->integer('from_id')->unsigned();
            // $table->integer('to_id')->unsigned();
            // $table->foreign('from_id', 'from')->references('id')->on('users')->onDelete('cascade');
            // $table->foreign('to_id', 'to')->references('id')->on('users')->onDelete('cascade');
            // $table->text('content');
            // $table->timestamp('created_at')->useCurrent();
            // $table->dateTime('read_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messageries');
    }
};
